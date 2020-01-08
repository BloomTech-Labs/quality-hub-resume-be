
// USE THIS TO CONNECT WITH USER AFTER INITIAL SET UP
const { getUserId } = require('../utils')

// MUTATION CREATE REVIEWER LISTING "POST"
async function createReviewerListing(parent, args, context){

    const coachID = getUserId(context)

    return context.prisma.createReviewerListing({
        price: args.price,
        position: args.position,
        industry: args.industry,
        description: args.description,
        reviewer: args.reviewer,
        createdAt: args.createdAt,
        updatedAt: args.updatedAt,
        company: args.company,
        isPublished: args.isPublished,
        coachID,
    })
}

// MUTATION UPDATE REVIEWER LISTING "PUT"
async function updateReviewerListing(perent, args, context){

    const coachID = getUserId(context)

    return context.prisma.updateReviewerListing({
        where: {
            id: args.id
        },
        data: {
            price: args.price,
            position: args.position,
            industry: args.industry,
            description: args.description,
            reviewer: args.reviewer,
            createdAt: args.createdAt,
            updatedAt: args.updatedAt,
            company: args.company,
            isPublished: args.isPublished,
            coachID,
        }
    })
}

// MUTATION DELETE REVIEWER LISTING by ID
function deleteReviewerListing(parent, args, context){
    const id = getUserId(context)
    return context.prisma.deleteReviewerListing({ 
        coachID: id,
    })
}



///
// MUTATION CREATE RESUME REVIEW "POST"
function createResumeReview(parent, args, context){

    const seeker = getUserId(context)

    return context.prisma.createResumeReview({
        name: args.name,
        isPending: args.isPending,
        isAccepted: args.isAccepted,
        isDenied: args.isDenied,
        isComplete: args.isComplete,
        dateRequested: args.dateRequested,
        dateAccepted: args.dateAccepted,
        dateCompleted: args.dateCompleted,
        coach: args.coach,
        seeker,
    })
}

// MUTATION UPDATE RESUME REVIEW "PUT"
async function updateResumeReview(perent, args, context){

    const seeker = getUserId(context)

    return context.prisma.updateResumeReview({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            isPending: args.isPending,
            isAccepted: args.isAccepted,
            isDenied: args.isDenied,
            isComplete: args.isComplete,
            dateRequested: args.dateRequested,
            dateAccepted: args.dateAccepted,
            dateCompleted: args.dateCompleted,
            seeker,
        }
    })
}

// MUTATION DELETE RESUME REVIEW by ID
function deleteResumeReview(parent, args, context){
    const seeker = getUserId(context)
    return context.prisma.deleteResumeReview({ 
       id: seeker,
    })
}

module.exports = {

    createReviewerListing,
    updateReviewerListing,
    deleteReviewerListing,
    createResumeReview,
    updateResumeReview,
    deleteResumeReview,
    
  }

