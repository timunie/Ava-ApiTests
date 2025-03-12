# IsEnabledCore Property


Allows a derived class to override the enabled state of the control.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual bool IsEnabledCore { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable ReadOnly Property IsEnabledCore As Boolean
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/InputElement.cs#L496" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>Derived controls may wish to disable the enabled state of the control without overwriting the user-supplied <a href="P_Avalonia_Input_InputElement_IsEnabled">IsEnabled</a> setting. This can be done by overriding this property to return the overridden enabled state. If the value returned from IsEnabledCore should change, then the derived control should call <a href="M_Avalonia_Input_InputElement_UpdateIsEffectivelyEnabled">UpdateIsEffectivelyEnabled()</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_InputElement">InputElement Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

