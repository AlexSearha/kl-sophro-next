'use client';
import { useModal } from '@/app/lib/providers/modalProvider';

export default function MyAccount() {
  const { dispatch } = useModal();
  return (
    <div className="flex justify-center items-center">
      <button
        className="flex justify-center items-center bg-red-600 text-white h-8 w-auto p-2 rounded-sm"
        onClick={() => dispatch({ type: 'update_modal', payload: { title: 'bite', width: '1/2' } })}
      >
        Clique moi
      </button>
    </div>
  );
}
