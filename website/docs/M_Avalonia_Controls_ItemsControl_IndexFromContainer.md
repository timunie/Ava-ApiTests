import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IndexFromContainer Method


Returns the index to the item that has the specified, generated container.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int IndexFromContainer(
	Control container
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function IndexFromContainer ( 
	container As Control
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IndexFromContainer : 
        container : Control -> int 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The generated container to retrieve the item index for.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The index to the item that corresponds to the specified generated container, or -1 if *container* is not found.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
