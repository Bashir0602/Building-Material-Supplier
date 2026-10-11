import { createContext, useContext, useState, useEffect } from 'react';
import { initialProducts, initialInquiries } from '../data/initialData';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // Load products from localStorage or fall back to defaults
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('buildpro_products');
      return saved ? JSON.parse(saved) : initialProducts;
    } catch (e) {
      console.error('Error loading products from storage', e);
      return initialProducts;
    }
  });

  // Load inquiries from localStorage or defaults
  const [inquiries, setInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('buildpro_inquiries');
      return saved ? JSON.parse(saved) : initialInquiries;
    } catch (e) {
      console.error('Error loading inquiries from storage', e);
      return initialInquiries;
    }
  });

  // Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteTargetProduct, setQuoteTargetProduct] = useState(null);

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailTargetProduct, setDetailTargetProduct] = useState(null);

  // Notification Toast state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Sync products to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('buildpro_products', JSON.stringify(products));
    } catch (e) {
      console.error('Failed to sync products', e);
    }
  }, [products]);

  // Sync inquiries to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('buildpro_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.error('Failed to sync inquiries', e);
    }
  }, [inquiries]);

  // Product actions
  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: `prod-${Date.now()}`,
      reviewsCount: 0,
      rating: 5.0
    };
    setProducts((prev) => [productWithId, ...prev]);
    showToast(`Product "${newProduct.name}" added successfully!`);
    return productWithId;
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
    showToast('Product updated successfully!');
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    showToast('Product removed from catalog', 'info');
  };

  const resetProducts = () => {
    setProducts(initialProducts);
    setInquiries(initialInquiries);
    localStorage.removeItem('buildpro_products');
    localStorage.removeItem('buildpro_inquiries');
    showToast('All product and inquiry data reset to default demo values', 'info');
  };

  // Inquiry actions
  const addInquiry = (inquiryData) => {
    const newInquiry = {
      ...inquiryData,
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    showToast('Inquiry / Quote request received! Our sales desk will call you.');
    return newInquiry;
  };

  const updateInquiryStatus = (id, newStatus) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    showToast(`Inquiry #${id} marked as ${newStatus}`);
  };

  const deleteInquiry = (id) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
    showToast('Inquiry deleted from records', 'info');
  };

  // Modal helpers
  const openQuoteModal = (product = null) => {
    setQuoteTargetProduct(product);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteTargetProduct(null);
  };

  const openDetailModal = (product) => {
    setDetailTargetProduct(product);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setDetailTargetProduct(null);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        inquiries,
        addProduct,
        updateProduct,
        deleteProduct,
        resetProducts,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        isQuoteModalOpen,
        quoteTargetProduct,
        openQuoteModal,
        closeQuoteModal,
        isDetailModalOpen,
        detailTargetProduct,
        openDetailModal,
        closeDetailModal,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
