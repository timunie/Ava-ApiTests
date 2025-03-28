# Captured Property


Gets the control that is currently capturing by the pointer, if any.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IInputElement? Captured { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property Captured As IInputElement
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Captured : IInputElement with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IPointer.cs" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Input_IInputElement">IInputElement</a>

## Remarks
When an element captures the pointer, it receives pointer input whether the cursor is within the control's bounds or not. To set the pointer capture, call the <a href="M_Avalonia_Input_IPointer_Capture">Capture(IInputElement)</a> method.

## See Also


#### Reference
<a href="T_Avalonia_Input_IPointer">IPointer Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

