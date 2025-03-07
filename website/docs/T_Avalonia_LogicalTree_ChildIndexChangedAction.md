# ChildIndexChangedAction Enumeration


Describes the action that caused a <a href="E_Avalonia_LogicalTree_IChildIndexProvider_ChildIndexChanged">ChildIndexChanged</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum ChildIndexChangedAction
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration ChildIndexChangedAction
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ChildIndexChangedAction
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>ChildIndexChanged</td>
<td>0</td>
<td>The index of a single child changed.</td>
</tr>
<tr>
<td>ChildIndexesReset</td>
<td>1</td>
<td>The index of multiple children changed and all children should be re-evaluated.</td>
</tr>
<tr>
<td>TotalCountChanged</td>
<td>2</td>
<td>The total number of children changed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  
