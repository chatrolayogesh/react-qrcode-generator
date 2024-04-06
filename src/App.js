import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div class="grid grid-cols-2 gap-4 w-3/4">
        
        <div className='shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5'>
            <form>
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">QR Code Information</h2>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div class="col-span-full">
                                <label for="size" class="block text-sm font-medium leading-6 text-gray-900">Url / text</label>
                                <div class="mt-2">
                                <input type="text" name="url_text" id="url-text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="size" class="block text-sm font-medium leading-6 text-gray-900">Image</label>
                                <div class="mt-2">
                                <input class="block w-full text-sm cursor-pointer  focus:outline-none" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="color" class="block text-sm font-medium leading-6 text-gray-900">Color</label>
                                <div class="mt-2">
                                    <input type="color" name="color" id="color" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                            <label for="background-color" class="block text-sm font-medium leading-6 text-gray-900">Background Color</label>
                                <div class="mt-2">
                                    <input type="color" name="bg_color" id="background-color" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="size" class="block text-sm font-medium leading-6 text-gray-900">Size</label>
                                <div class="mt-2">
                                <input type="number" name="sizet" id="size" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <select id="file-ext" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option value="png">PNG</option>
                                <option value="jpeg">JPEG</option>
                                <option value="webp">WEBP</option>
                                </select>
                            </div>

                            <div class="sm:col-span-3">
                                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download QR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
        <div className='shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5'>
            <div class="">
                <img class="bg-indigo-300 object-cover h-48 w-48 text-center mx-auto" />
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
