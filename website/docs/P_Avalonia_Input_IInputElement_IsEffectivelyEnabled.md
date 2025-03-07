# IsEffectivelyEnabled Property


Gets a value indicating whether this control and all its parents are enabled.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool IsEffectivelyEnabled \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property IsEffectivelyEnabled As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IsEffectivelyEnabled : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IInputElement.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>The <a href="P_Avalonia_Input_IInputElement_IsEnabled">IsEnabled</a> property is used to toggle the enabled state for individual controls. The IsEffectivelyEnabled property takes into account the <a href="P_Avalonia_Input_IInputElement_IsEnabled">IsEnabled</a> value of this control and its parent controls.

## See Also


#### Reference
<a href="T_Avalonia_Input_IInputElement">IInputElement Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
