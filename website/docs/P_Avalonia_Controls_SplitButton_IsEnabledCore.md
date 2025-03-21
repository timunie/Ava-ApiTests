# IsEnabledCore Property


Allows a derived class to override the enabled state of the control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override bool IsEnabledCore { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides ReadOnly Property IsEnabledCore As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IsEnabledCore : bool with get
override IsEnabledCore : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/SplitButton/SplitButton.cs#L131" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## Remarks
Derived controls may wish to disable the enabled state of the control without overwriting the user-supplied <a href="P_Avalonia_Input_InputElement_IsEnabled">IsEnabled</a> setting. This can be done by overriding this property to return the overridden enabled state. If the value returned from <a href="P_Avalonia_Input_InputElement_IsEnabledCore">IsEnabledCore</a> should change, then the derived control should call <a href="M_Avalonia_Input_InputElement_UpdateIsEffectivelyEnabled">UpdateIsEffectivelyEnabled()</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_SplitButton">SplitButton Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

