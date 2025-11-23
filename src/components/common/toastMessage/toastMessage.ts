import { toast } from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'loading' | 'custom';

export const CustomToast = ( message :string , type:ToastType) => {
  console.log('message, type',message, type);

  const commonProps:any = {
    position: 'top-center',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    }
  }
  
  switch (type) {
    case 'success':
      toast.success(message, commonProps);
      break;
    case 'error':
      toast.error(message, commonProps);
      break;
    case 'loading':
      toast.loading(message, { position : 'top-center' });
      break;
    default:
      toast(message, commonProps);
  }
};

export default CustomToast;
