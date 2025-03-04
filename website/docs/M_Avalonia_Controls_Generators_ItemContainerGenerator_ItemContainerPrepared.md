import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ItemContainerPrepared Method


Notifies the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a> that a container has been fully prepared to display an item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void ItemContainerPrepared(
	Control container,
	Object? item,
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub ItemContainerPrepared ( 
	container As Control,
	item As Object,
	index As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ItemContainerPrepared : 
        container : Control * 
        item : Object * 
        index : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Generators/ItemContainerGenerator.cs#L136" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container control.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item being displayed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item being displayed.</dd></dl>

## 
This method must be called when a container has been fully prepared and added to the logical and visual trees, but may be called before a layout pass has completed. It must be called regardless of the result of <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> but if that method returned false then must be called only a single time.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Generators_ItemContainerGenerator">ItemContainerGenerator Class</a>  
<a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators Namespace</a>  
