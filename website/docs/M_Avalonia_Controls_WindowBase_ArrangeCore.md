import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ArrangeCore Method


Overrides the core arrange logic for windows.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void ArrangeCore(
	Rect finalRect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub ArrangeCore ( 
	finalRect As Rect
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ArrangeCore : 
        finalRect : Rect -> unit 
override ArrangeCore : 
        finalRect : Rect -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/WindowBase.cs#L300" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  Rect</dt><dd>The final arrange rect.</dd></dl>

## 
The layout logic for top-level windows is different than for other controls because they don't have a parent, meaning that many layout properties handled by the default ArrangeCore (such as margins and alignment) make no sense.

## See Also


#### Reference
<a href="T_Avalonia_Controls_WindowBase">WindowBase Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
