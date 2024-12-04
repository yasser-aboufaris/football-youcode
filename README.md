# FUT Team Builder

## Description
L'application **FUT Team Builder** permet aux utilisateurs de créer et gérer leur équipe FUT (Ultimate Team) en ajoutant, positionnant et modifiant les joueurs tout en respectant les formations tactiques populaires comme **4-4-2** ou **4-3-3**.

L'objectif principal est de fournir une expérience interactive et fluide grâce à :
- Des **formulaires dynamiques**.
- Une **interface utilisateur interactive**.

---

## Fonctionnalités

### 1. **Ajout Dynamique des Joueurs**
- Un formulaire permet d'ajouter des joueurs avec des champs pour :
  - Nom
  - Position
  - Note
  - Statistiques (et autres détails pertinents).
- Les joueurs sont automatiquement assignés à leur position selon la formation choisie.

### 2. **Positionnement des Joueurs**
- Prise en charge des formations tactiques :
  - **4-3-3** :
    - 1 GK (Gardien de but)
    - 2 CB (Défenseurs centraux)
    - 1 LB (Latéral gauche), 1 RB (Latéral droit)
    - 3 CM (Milieux centraux)
    - 1 LW (Ailier gauche), 1 RW (Ailier droit)
    - 1 ST (Attaquant central)

### 3. **Gestion des Cartes des Joueurs**
- Ajout, changement et suppression des joueurs via l'interface utilisateur.
- Limitation stricte :
  - **11 joueurs maximum** pour la formation principale.
  - Les joueurs supplémentaires sont placés en réserve pour des changements ultérieurs.

### 4. **Formulaires Dynamiques**
- Ajout ou suppression de joueurs tout en respectant :
  - Les règles de composition de l'équipe.
  - Les contraintes des formations tactiques.

### 5. **Validation des Champs de Saisie**
- Contrôles des champs pour garantir la cohérence des données :
  - Nom
  - Position
  - Note
- Validation native et personnalisée pour assurer l'exactitude des informations saisies.

---

## Technologies Utilisées
- **HTML5** pour la structure.
- **CSS3** pour le style et l'interface utilisateur.
- **JavaScript** pour les fonctionnalités dynamiques et la gestion des données.
