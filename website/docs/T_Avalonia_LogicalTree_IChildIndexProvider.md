# IChildIndexProvider Interface


Child's index and total count information provider used by list-controls (ListBox, StackPanel, etc.)



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IChildIndexProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IChildIndexProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IChildIndexProvider = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/IChildIndexProvider.cs" title="View the source code">View Source</a>



## Remarks
Used by nth-child and nth-last-child selectors.

## Methods
<table>
<tr>
<td><a href="M_Avalonia_LogicalTree_IChildIndexProvider_GetChildIndex">GetChildIndex(ILogical)</a></td>
<td>Gets child's actual index in order of the original source.</td>
</tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_IChildIndexProvider_TryGetTotalCount">TryGetTotalCount(Int32)</a></td>
<td>Total children count or null if source is infinite. Some Avalonia features might not work if <a href="M_Avalonia_LogicalTree_IChildIndexProvider_TryGetTotalCount">TryGetTotalCount(Int32)</a> returns false, for instance: nth-last-child selector.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_LogicalTree_IChildIndexProvider_ChildIndexChanged">ChildIndexChanged</a></td>
<td>Notifies subscriber when a child's index was changed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  

