
export function moveFileLocally(file, newDirectory) {
    const oldPath = file.name; // Chemin d'origine du fichier
    const newPath = `${newDirectory}/${file.name}`; // Nouveau chemin du fichier

    // Vérifier si le navigateur prend en charge l'API FileSystem
    if (window.requestFileSystem) {
        window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {
            fs.root.getFile(oldPath, {}, function (entry) {
                entry.moveTo(fs.root, newPath, function (movedEntry) {
                    console.log('Fichier déplacé avec succès:', movedEntry);
                }, errorHandler);
            }, errorHandler);
        }, errorHandler);
    } else {
        console.error('Votre navigateur ne prend pas en charge l\'API FileSystem.');
    }
}

function errorHandler(error) {
    console.error('Une erreur est survenue:', error);
}