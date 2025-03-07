# Remove Method


Removes the specified item reference from the collection or view.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool Remove(
	Object? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Remove ( 
	value As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Remove : 
        value : Object -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemCollection.cs#L86" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object to remove.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the item was removed; otherwise false.

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
