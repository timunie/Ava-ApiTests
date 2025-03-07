# Capture Method


Captures pointer input to the specified control.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Capture(
	IInputElement? control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Capture ( 
	control As IInputElement
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Capture : 
        control : IInputElement -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IPointer.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd>The control.</dd></dl>When an element captures the pointer, it receives pointer input whether the cursor is within the control's bounds or not. The current pointer capture control is exposed by the <a href="P_Avalonia_Input_IPointer_Captured">Captured</a> property.

## See Also


#### Reference
<a href="T_Avalonia_Input_IPointer">IPointer Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
