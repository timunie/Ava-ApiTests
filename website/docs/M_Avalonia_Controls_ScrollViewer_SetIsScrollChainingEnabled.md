import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SetIsScrollChainingEnabled Method


Sets the value of the IsScrollChainingEnabled attached property.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void SetIsScrollChainingEnabled(
	Control control,
	bool value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub SetIsScrollChainingEnabled ( 
	control As Control,
	value As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member SetIsScrollChainingEnabled : 
        control : Control * 
        value : bool -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ScrollViewer.cs#L604" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control to set the value on.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>The value of the property.</dd></dl>

## 
After a user hits a scroll limit on an element that has been nested within another scrollable element, you can specify whether that parent element should continue the scrolling operation begun in its child element. This is called scroll chaining.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
