'use client';
import React, { useState, useRef, ChangeEvent } from 'react';
export const CustomProfilePicture = () => {
    const [foto, setFoto] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Lida com a seleção da imagem e a converte para base64
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setFoto(reader.result as string);
        };
        reader.readAsDataURL(file);
        }
    };

    // Simula o clique na imagem para abrir o seletor de arquivos
    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    // Exemplo de edição: remover ou limpar a foto
    const handleRemoveImage = () => {
        setFoto(null);
    };

    return (
        <div style={{ textAlign: 'center'}}>
        <h3>Edite sua Foto</h3>
        <div 
            onClick={triggerFileInput} 
            style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto',
            cursor: 'pointer',
            border: '2px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9f9f9'
            }}
        >
            {foto ? (
            <img 
                src={foto} 
                alt="Foto do Perfil" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            ) : (
            <span>Clique para adicionar/editar foto</span>
            )}
        </div>

        <input 
            type="file" 
            ref={fileInputRef}
            style={{ display: 'none' }} 
            accept="image/*" 
            onChange={handleImageChange} 
        />

        {foto && (
            <button 
            onClick={handleRemoveImage}
            style={{ marginTop: '15px', padding: '8px 16px', cursor: 'pointer' }}
            >
            Remover Foto
            </button>
        )}
        </div>
    )
}