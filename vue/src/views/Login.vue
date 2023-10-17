<script>
import { storeMain } from '../store/index'
export default {
    name: 'Login',
    setup() {
        const store = storeMain();
        return {
            store,
        };
    },
    
}
</script>
<template>
    <div class="w-full max-w-md">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Supervisor">
                    Supervisor
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Supervisor" type="text" placeholder="Supervisor">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Operario">
                    Operario
                </label>
                <select-vue id="Operario"></select-vue>
                <!-- <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Operario" type="text" placeholder="Operario"> -->
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Producto">
                    Producto
                </label>
                <select-vue id="Producto"></select-vue>
                <!-- <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Producto" type="text" placeholder="Producto"> -->
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Clave
                </label>
                <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Clave" type="password" placeholder="******************">
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="mb-4">

                <button
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Iniciar Sesion
                </button>


            </div>
            <div class="mb-4">
                <router-link :to="{ name: 'Register' }">
                    <button
                        class="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Registrarte
                    </button>
                </router-link>
            </div>

        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2023 Acme Corp. All rights reserved.
        </p>
    </div>
</template>