import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Add Method


Adds an item to the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int Add(
	Object? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Add ( 
	value As Object
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Add : 
        value : Object -> int 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to add to the collection.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The position into which the new element was inserted, or -1 to indicate that the item was not inserted into the collection.

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
