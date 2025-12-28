
const Footer = () => {
  return (
<footer class="bg-neutral-primary-soft rounded-base shadow-lg border border-gray-300 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/*<img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />*/}
                <span class="text-heading self-center text-3xl font-bold whitespace-nowrap cursor-pointer">Pixelify</span>
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-base text-gray-600 font-medium  sm:mb-0">
                <li>
                    <a href="#" class="hover:text-black me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:text-black me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:text-black me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:text-black">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-default sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-600 sm:text-center cursor-pointer hover:text-black">© 2025 Pixelify™. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer