import React from "react";
import { Listbox, ListboxItem, Link } from "@nextui-org/react";


const SideMenu = () => {
    //const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        
        <Listbox variant="faded" aria-label="Listbox menu with icons" className="max-w-xs">
            <ListboxItem
                key="home"
                showDivider
            >
                <Link color="foreground" href="/" aria-current="page">
                    Accueil
                </Link>
            </ListboxItem>
            <ListboxItem
                key="dashboard"
                showDivider
            >
                <Link color="foreground" href="/admin/dashboard" aria-current="page">
                    Dashboard
                </Link>
            </ListboxItem>
                <ListboxItem
                    key="Jadd"           
                >
                <Link color="foreground" href="/admin/joueur/add" aria-current="page">
                    Nouveau Joueur
                </Link>
                </ListboxItem>
                <ListboxItem
                    key="Jedit"
                showDivider
                >
                <Link color="foreground" href="/admin/joueur/index" aria-current="page">
                    Modifier ou Supprimer Joueur
                </Link>
                </ListboxItem>
            {/* <ListboxItem
                key="Enew"
            >
                <Link color="foreground" href="/admin/evenement/add" aria-current="page">
                    Nouveau Evenement
                </Link>
            </ListboxItem>
            <ListboxItem
                key="Eedit"
                showDivider

            >
                <Link color="foreground" href="/admin/evenement/index" aria-current="page">
                    Modifier ou Supprimer un Evenement
                </Link>
            </ListboxItem>
            <ListboxItem
                key="Bnew"
            >
                <Link color="foreground" href="/admin/blog/add" aria-current="page">
                    Nouveau Blog
                </Link>
            </ListboxItem>
            <ListboxItem
                key="Bedit"
                showDivider
            ><Link color="foreground" href="/admin/blog/index" aria-current="page">
                    Modifier ou Supprimer Blog
                </Link>
            </ListboxItem> */}
            <ListboxItem
                key="Eqnew"
            >
                <Link color="foreground" href="/admin/equipe/add" aria-current="page">
                    Nouvelle Equipe
                </Link>
            </ListboxItem>
            <ListboxItem
                key="Eqedit"
                showDivider
            ><Link color="foreground" href="/admin/equipe/index" aria-current="page">
                    Modifier ou Supprimer Equipe
                </Link>
            </ListboxItem>
            </Listbox>
        
    );
}

export default SideMenu;