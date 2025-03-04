import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PrepareItemContainer Method


Prepares the specified element as the container for the corresponding item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void PrepareItemContainer(
	Control container,
	Object? item,
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub PrepareItemContainer ( 
	container As Control,
	item As Object,
	index As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PrepareItemContainer : 
        container : Control * 
        item : Object * 
        index : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Generators/ItemContainerGenerator.cs#L119" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The element that's used to display the specified item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to display.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item to display.</dd></dl>

## 
If <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> is false for an item, then this method must only be called a single time; otherwise this method must be called after the container is created, and each subsequent time the container is recycled to display a new item.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Generators_ItemContainerGenerator">ItemContainerGenerator Class</a>  
<a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators Namespace</a>  
