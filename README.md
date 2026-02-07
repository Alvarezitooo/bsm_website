# Brasserie Saint Martin - Site Web

Ce projet est un site web moderne et premium pour la "Brasserie Saint Martin", développé avec Next.js, TypeScript, et Tailwind CSS.

## 🚀 Démarrage Rapide

Pour lancer le projet en mode développement local.

1.  **Installer les dépendances :**
    ```bash
    npm install
    ```

2.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```

    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## ✏️ Comment Personnaliser le Contenu

La majorité du contenu du site est gérée depuis le dossier `/data`.

### 1. Informations Générales

Modifiez le fichier `/data/siteInfo.ts` pour changer :
- Le nom du restaurant
- L'adresse, le téléphone, l'email
- Les liens de réservation et de carte (Google Maps)
- Les liens des réseaux sociaux
- Les horaires d'ouverture (utilisés pour le badge "Ouvert/Fermé")
- Les informations légales du pied de page

### 2. Menus

- **Plats Signature (Page d'accueil) :** Modifiez `/data/signature.json`.
- **Carte Complète :** Modifiez `/data/menu.json` pour changer les catégories et les plats de la page `/menu`.
- **Menu PDF :** Remplacez le fichier `/public/menu.pdf` par votre propre version.

### 3. Images

Toutes les images sont dans le dossier `/public/images`. Pour les remplacer, gardez les mêmes noms de fichiers ou mettez à jour les chemins dans les composants correspondants.

- **Logo :** `/public/logo.png`
- **Plats Signature :** `/public/images/signature/`
- **Ambiance & Hero :** `/public/images/atmosphere/`

Il est recommandé d'utiliser des images optimisées pour le web (par exemple, via un service comme TinyPNG) avant de les ajouter au projet.

## 🌐 Déploiement sur Vercel

Ce projet est configuré pour un déploiement "zéro-config" sur Vercel.

1.  **Poussez votre code sur un dépôt Git (GitHub, GitLab, etc.).**

2.  **Importez votre projet sur Vercel.**
    - Connectez-vous à votre compte Vercel.
    - Cliquez sur "Add New... -> Project".
    - Sélectionnez votre dépôt Git.

3.  **Configurez le projet (Vercel détecte normalement tout automatiquement).**
    - **Framework Preset:** `Next.js`
    - **Root Directory:** `bsm-website` (si vous avez gardé cette structure) ou `.` si le projet est à la racine de votre dépôt.
    - Laissez les autres paramètres par défaut.

4.  **Ajoutez les variables d'environnement (si nécessaire).**
    - Ce projet n'en nécessite pas par défaut, mais si vous ajoutez des services externes (ex: une clé API pour un CMS), vous pouvez les ajouter dans `Settings -> Environment Variables`.

5.  **Cliquez sur "Deploy".**

Vercel construira et déploiera automatiquement votre site. Chaque `git push` sur la branche principale déclenchera un nouveau déploiement.