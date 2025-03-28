# PlatformSettings Property


Represents a contract for accessing top-level platform-specific settings.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IPlatformSettings? PlatformSettings { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property PlatformSettings As IPlatformSettings
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PlatformSettings : IPlatformSettings with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IInputRoot.cs" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Platform_IPlatformSettings">IPlatformSettings</a>

## Remarks
PlatformSettings can be null only if window wasn't initialized yet.

## See Also


#### Reference
<a href="T_Avalonia_Input_IInputRoot">IInputRoot Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

