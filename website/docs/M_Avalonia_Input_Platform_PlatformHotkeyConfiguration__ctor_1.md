# PlatformHotkeyConfiguration(KeyModifiers, KeyModifiers, KeyModifiers) Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Platform_PlatformHotkeyConfiguration">PlatformHotkeyConfiguration</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PlatformHotkeyConfiguration(
	KeyModifiers commandModifiers,
	KeyModifiers selectionModifiers = KeyModifiers.Shift,
	KeyModifiers wholeWordTextActionModifiers = KeyModifiers.Control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	commandModifiers As KeyModifiers,
	Optional selectionModifiers As KeyModifiers = KeyModifiers.Shift,
	Optional wholeWordTextActionModifiers As KeyModifiers = KeyModifiers.Control
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        commandModifiers : KeyModifiers * 
        ?selectionModifiers : KeyModifiers * 
        ?wholeWordTextActionModifiers : KeyModifiers 
(* Defaults:
        let _selectionModifiers = defaultArg selectionModifiers KeyModifiers.Shift
        let _wholeWordTextActionModifiers = defaultArg wholeWordTextActionModifiers KeyModifiers.Control
*)
-> PlatformHotkeyConfiguration
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Platform/PlatformHotkeyConfiguration.cs#L18" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Platform_PlatformHotkeyConfiguration">PlatformHotkeyConfiguration Class</a>  
<a href="Overload_Avalonia_Input_Platform_PlatformHotkeyConfiguration__ctor">PlatformHotkeyConfiguration Overload</a>  
<a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform Namespace</a>  
