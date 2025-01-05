
## Commande pour lancer le server :
```npx json-server db.json --port 3001```

---

# Application de gestion des tâches (Task Manager)
## Objectif :
Créer une application web de gestion des tâches utilisant React. Ce projet doit démontrer vos compétences techniques, votre capacité à structurer le code, et à gérer les interactions utilisateur.
## Exigences fonctionnelles :
1. **Affichage des tâches :**
    * Afficher une liste de tâches avec les informations suivantes  :
        * Titre
        * Description
        * Statut (À faire, En cours, Terminé)
    * Permettre de trier les tâches par statut ou date de création
2. **Ajout de tâches :**
    * Permettre à l'utilisateur d'ajouter une nouvelle tâche avec :
        * Un titre (obligatoire)
        * Une description (facultative)
        * Une date limite (deadline).
3. **Modification des tâches :**
    * Permettre la mise à jour du titre, de la description et du statut d’une tâche.
4. **Suppression des tâches :**
    * Ajouter un bouton pour supprimer une tâche.
5. **Filtrage des tâches :**
    * Ajouter un filtre pour afficher uniquement les tâches avec un certain statut.
6. **Recherche :**

## Contraintes techniques :
1. **Technologies obligatoires :**
    * React (Hooks obligatoire, pas de classes)
    * Utilisation de React Router pour gérer les routes suivantes :
        * Page d’accueil : Liste des tâches.
        * Page d’ajout/modification : Formulaire pour ajouter ou éditer une tâche.
2. **Style :**
    * Utiliser Tailwind CSS ou un système de styles au choix (styled-components, Sass, etc.).
    * L’interface doit être responsive.
3. **Tests :**
    * Ajouter des tests unitaires avec **Jest** et des tests de composants avec **React Testing Library.**
4. **API :**
    * Simuler une API REST avec json-server ou Mock Service Worker (MSW) pour gérer les tâches.
    * Les actions CRUD (Create, Read, Update, Delete) doivent être faites via cette API.
5. **Bonus :**
    * Utiliser TypeScript pour typer le projet.
    * Ajouter un système de notifications (par exemple, pour confirmer l’ajout ou la suppression d’une tâche).
## Livrable attendu :
    * Un repository Git public ou privé avec le code source.
    * Un fichier README.md
