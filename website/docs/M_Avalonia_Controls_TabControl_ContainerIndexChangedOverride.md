import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ContainerIndexChangedOverride Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TabControl.cs#L181" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TabControl">TabControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
