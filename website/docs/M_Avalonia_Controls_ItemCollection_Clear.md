import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Clear Method


Clears the collection and releases the references on all items currently in the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Clear()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Clear
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Clear : unit -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ItemCollection.cs#L56" title="View the source code">View Source</a>



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
