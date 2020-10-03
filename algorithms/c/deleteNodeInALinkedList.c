/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

void deleteNode(struct ListNode* node) {
    node->val=node->next->val;
    struct ListNode* p=node->next;
    node->next=p->next;
    free(p);
}