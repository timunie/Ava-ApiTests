# ILogical Interface


Represents a node in the logical tree.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface ILogical
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface ILogical
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type ILogical = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/ILogical.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_LogicalTree_ILogical_IsAttachedToLogicalTree">IsAttachedToLogicalTree</a></td>
<td>Gets a value indicating whether the element is attached to a rooted logical tree.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LogicalTree_ILogical_LogicalChildren">LogicalChildren</a></td>
<td>Gets the logical children.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LogicalTree_ILogical_LogicalParent">LogicalParent</a></td>
<td>Gets the logical parent.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_LogicalTree_ILogical_NotifyAttachedToLogicalTree">NotifyAttachedToLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td>Notifies the control that it is being attached to a rooted logical tree.</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_ILogical_NotifyDetachedFromLogicalTree">NotifyDetachedFromLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td>Notifies the control that it is being detached from a rooted logical tree.</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_ILogical_NotifyResourcesChanged">NotifyResourcesChanged(ResourcesChangedEventArgs)</a></td>
<td>Notifies the control that a change has been made to resources that apply to it.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_LogicalTree_ILogical_AttachedToLogicalTree">AttachedToLogicalTree</a></td>
<td>Raised when the control is attached to a rooted logical tree.</td>
</tr>
<tr>
<td><a href="E_Avalonia_LogicalTree_ILogical_DetachedFromLogicalTree">DetachedFromLogicalTree</a></td>
<td>Raised when the control is detached from a rooted logical tree.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Find__1_1">Find(T)(String)</a></td>
<td>Finds a named element in an <a href="T_Avalonia_Controls_INameScope">INameScope</a>.<br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_FindLogicalAncestorOfType__1">FindLogicalAncestorOfType(T)(Boolean)</a></td>
<td>Finds first ancestor of given type.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_FindLogicalDescendantOfType__1">FindLogicalDescendantOfType(T)(Boolean)</a></td>
<td>Finds first descendant of given type.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_FindNameScope">FindNameScope()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Get__1_1">Get(T)(String)</a></td>
<td>Gets a named element from an <a href="T_Avalonia_Controls_INameScope">INameScope</a> or throws if no element of the requested name was found.<br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalAncestors">GetLogicalAncestors()</a></td>
<td>Enumerates the ancestors of an ILogical in the logical tree.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalChildren">GetLogicalChildren()</a></td>
<td>Enumerates the children of an ILogical in the logical tree.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalDescendants">GetLogicalDescendants()</a></td>
<td>Enumerates the descendants of an ILogical in the logical tree.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalParent">GetLogicalParent()</a></td>
<td>Gets the logical parent of an ILogical.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalParent__1">GetLogicalParent(T)()</a></td>
<td>Gets the logical parent of an ILogical.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalSiblings">GetLogicalSiblings()</a></td>
<td>Enumerates the siblings of an ILogical in the logical tree.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetSelfAndLogicalAncestors">GetSelfAndLogicalAncestors()</a></td>
<td>Enumerates an ILogical and its ancestors in the logical tree.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetSelfAndLogicalDescendants">GetSelfAndLogicalDescendants()</a></td>
<td>Enumerates an ILogical and its descendants in the logical tree.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_IsLogicalAncestorOf">IsLogicalAncestorOf(ILogical)</a></td>
<td>Tests whether an ILogical is an ancestor of another logical.<br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  

