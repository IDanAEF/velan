const other = () => {
    try {
        const bodyClickContent = document.querySelectorAll('.body-click-content'),
              bodyClickTarget = document.querySelectorAll('.body-click-target');

        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('body-click-target') || e.target.classList.contains('body-click-close')) {
                if (e.target.getAttribute('data-content')) 
                    document.querySelector('.body-click-content[data-content="'+e.target.getAttribute('data-content')+'"]').classList.toggle('active');
                else 
                    e.target.parentElement.classList.remove('active');

                e.target.classList.toggle('active');
            } else if (!e.target.closest('.body-click-content') || e.target.closest('.body-click-content').classList.contains('close-click')) {
                bodyClickContent.forEach(item => item.classList.remove('active'));
                bodyClickTarget.forEach(item => item.classList.remove('active'));
            }
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default other;