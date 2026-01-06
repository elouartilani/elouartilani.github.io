document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('section');
    
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });

        // Retirer 'active' de tous les <li>
        document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));

        sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.parentElement.classList.add('active'); // Appliquer 'active' au parent <li>
            }
        });
    }
    
    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        showSection(hash);
    }

    window.addEventListener('hashchange', handleHashChange);
    
    if (window.location.hash) {
        handleHashChange();
    } else {
        const firstSectionId = sections[0].id;
        showSection(firstSectionId);
    }
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});
