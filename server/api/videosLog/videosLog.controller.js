/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/videosLogs              ->  index
 */

// Gets a list of VideosLogs
export function index(req, res) {
    res.json(require('./video_log.json'));
}
