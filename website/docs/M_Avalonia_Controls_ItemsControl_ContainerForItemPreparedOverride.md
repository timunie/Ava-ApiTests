import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ContainerForItemPreparedOverride Method


Called when a container has been fully prepared to display an item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void ContainerForItemPreparedOverride(
	Control container,
	Object? item,
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub ContainerForItemPreparedOverride ( 
	container As Control,
	item As Object,
	index As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ContainerForItemPreparedOverride : 
        container : Control * 
        item : Object * 
        index : int -> unit 
override ContainerForItemPreparedOverride : 
        container : Control * 
        item : Object * 
        index : int -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container control.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item being displayed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item being displayed.</dd></dl>This method will be called when a container has been fully prepared and added to the logical and visual trees, but may be called before a layout pass has completed. It is called immediately before the <a href="E_Avalonia_Controls_ItemsControl_ContainerPrepared">ContainerPrepared</a> event is raised.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
