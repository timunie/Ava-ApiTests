import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ContainerIndexChangedOverride Method


Called when the index for a container changes due to an insertion or removal in the items collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void ContainerIndexChangedOverride(
	Control container,
	int oldIndex,
	int newIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub ContainerIndexChangedOverride ( 
	container As Control,
	oldIndex As Integer,
	newIndex As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ContainerIndexChangedOverride : 
        container : Control * 
        oldIndex : int * 
        newIndex : int -> unit 
override ContainerIndexChangedOverride : 
        container : Control * 
        oldIndex : int * 
        newIndex : int -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container whose index changed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The old index.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The new index.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
