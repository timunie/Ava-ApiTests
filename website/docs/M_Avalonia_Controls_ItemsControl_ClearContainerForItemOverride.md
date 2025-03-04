import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ClearContainerForItemOverride Method


Undoes the effects of the <a href="M_Avalonia_Controls_ItemsControl_PrepareContainerForItemOverride">PrepareContainerForItemOverride(Control, Object, Int32)</a> method.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void ClearContainerForItemOverride(
	Control container
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub ClearContainerForItemOverride ( 
	container As Control
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ClearContainerForItemOverride : 
        container : Control -> unit 
override ClearContainerForItemOverride : 
        container : Control -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ItemsControl.cs#L450" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container element.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
