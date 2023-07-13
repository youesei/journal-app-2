import { fileUpload } from '../../src/helpers/fileUpload';
import fetch from 'cross-fetch';

describe('Pruebas en fileUpload', () => {


    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80';

        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File( [blob], 'foto.jpg' );

        console.log(file);
        const url = await fileUpload( file );

        // expect( typeof url ).toBe('string');

    });

});