import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ContainerFromItem Method


Returns the container corresponding to the specified item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Control? ContainerFromItem(
	Object item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ContainerFromItem ( 
	item As Object
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ContainerFromItem : 
        item : Object -> Control 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to retrieve the container for.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
A container that corresponds to the specified item, if the item has a container and exists in the collection; otherwise, null.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
