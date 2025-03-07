# VisualExtensions Class


Provides extension methods for working with the visual tree.



## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class VisualExtensions
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public NotInheritable Class VisualExtensions
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
[<ExtensionAttribute>]
type VisualExtensions = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/VisualTree/VisualExtensions.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  VisualExtensions</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_CalculateDistanceFromAncestor">CalculateDistanceFromAncestor(Visual, Visual)</a></td>
<td>Calculates the distance from a visual's ancestor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_CalculateDistanceFromRoot">CalculateDistanceFromRoot(Visual)</a></td>
<td>Calculates the distance from a visual's root.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindAncestorOfType__1">FindAncestorOfType(T)(Visual, Boolean)</a></td>
<td>Finds first ancestor of given type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindCommonVisualAncestor">FindCommonVisualAncestor(Visual, Visual)</a></td>
<td>Tries to get the first common ancestor of two visuals.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindDescendantOfType__1">FindDescendantOfType(T)(Visual, Boolean)</a></td>
<td>Finds first descendant of given type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetSelfAndVisualAncestors">GetSelfAndVisualAncestors(Visual)</a></td>
<td>Enumerates an <a href="T_Avalonia_Visual">Visual</a> and its ancestors in the visual tree.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetSelfAndVisualDescendants">GetSelfAndVisualDescendants(Visual)</a></td>
<td>Enumerates an <a href="T_Avalonia_Visual">Visual</a> and its descendants in the visual tree.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetTransformedBounds">GetTransformedBounds(Visual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAncestors">GetVisualAncestors(Visual)</a></td>
<td>Enumerates the ancestors of an <a href="T_Avalonia_Visual">Visual</a> in the visual tree.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAt_1">GetVisualAt(Visual, Point)</a></td>
<td>Gets the first visual in the visual tree whose bounds contain a point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAt">GetVisualAt(Visual, Point, Func(Visual, Boolean))</a></td>
<td>Gets the first visual in the visual tree whose bounds contain a point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualChildren">GetVisualChildren(Visual)</a></td>
<td>Enumerates the children of an <a href="T_Avalonia_Visual">Visual</a> in the visual tree.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualDescendants">GetVisualDescendants(Visual)</a></td>
<td>Enumerates the descendants of an <a href="T_Avalonia_Visual">Visual</a> in the visual tree.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualParent">GetVisualParent(Visual)</a></td>
<td>Gets the visual parent of an <a href="T_Avalonia_Visual">Visual</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualParent__1">GetVisualParent(T)(Visual)</a></td>
<td>Gets the visual parent of an <a href="T_Avalonia_Visual">Visual</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualRoot">GetVisualRoot(Visual)</a></td>
<td>Gets the root visual for an <a href="T_Avalonia_Visual">Visual</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualsAt_1">GetVisualsAt(Visual, Point)</a></td>
<td>Enumerates the visible visuals in the visual tree whose bounds contain a point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualsAt">GetVisualsAt(Visual, Point, Func(Visual, Boolean))</a></td>
<td>Enumerates the visuals in the visual tree whose bounds contain a point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_IsAttachedToVisualTree">IsAttachedToVisualTree(Visual)</a></td>
<td>Returns a value indicating whether this control is attached to a visual root.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_IsVisualAncestorOf">IsVisualAncestorOf(Visual, Visual)</a></td>
<td>Tests whether an <a href="T_Avalonia_Visual">Visual</a> is an ancestor of another visual.</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_SortByZIndex">SortByZIndex(IEnumerable(Visual))</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  
