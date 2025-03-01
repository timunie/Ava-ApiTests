import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ArrangeChild Method


Arranges a single child.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void ArrangeChild(
	Control child,
	Size finalSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub ArrangeChild ( 
	child As Control,
	finalSize As Size
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ArrangeChild : 
        child : Control * 
        finalSize : Size -> unit 
override ArrangeChild : 
        child : Control * 
        finalSize : Size -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The child to arrange.</dd><dt>  Size</dt><dd>The size allocated to the canvas.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Canvas">Canvas Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
