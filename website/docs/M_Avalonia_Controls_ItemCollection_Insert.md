# Insert Method


Inserts an element into the collection at the specified index.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Insert(
	int index,
	Object? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Insert ( 
	index As Integer,
	value As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Insert : 
        index : int * 
        value : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemCollection.cs#L66" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The zero-based index at which to insert the item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to insert.</dd></dl>

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

