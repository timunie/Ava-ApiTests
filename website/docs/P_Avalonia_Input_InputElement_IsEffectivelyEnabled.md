# IsEffectivelyEnabled Property


Gets a value indicating whether this control and all its parents are enabled.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsEffectivelyEnabled { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property IsEffectivelyEnabled As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IsEffectivelyEnabled : bool with get
override IsEffectivelyEnabled : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/InputElement.cs#L461" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="P_Avalonia_Input_IInputElement_IsEffectivelyEnabled">IInputElement.IsEffectivelyEnabled</a>  


## Remarks
The <a href="P_Avalonia_Input_IInputElement_IsEnabled">IsEnabled</a> property is used to toggle the enabled state for individual controls. The <a href="P_Avalonia_Input_IInputElement_IsEffectivelyEnabled">IsEffectivelyEnabled</a> property takes into account the <a href="P_Avalonia_Input_IInputElement_IsEnabled">IsEnabled</a> value of this control and its parent controls.

## See Also


#### Reference
<a href="T_Avalonia_Input_InputElement">InputElement Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

