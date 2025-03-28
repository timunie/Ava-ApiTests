# RemoveAt Method


Removes the item at the specified index of the collection or view.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void RemoveAt(
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub RemoveAt ( 
	index As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RemoveAt : 
        index : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemCollection.cs#L75" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The zero-based index of the item to remove.</dd></dl>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The collection is in ItemsSource mode.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemCollection">ItemCollection Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

