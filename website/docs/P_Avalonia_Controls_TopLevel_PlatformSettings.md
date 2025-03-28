# PlatformSettings Property


Represents a contract for accessing top-level platform-specific settings.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IPlatformSettings? PlatformSettings { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property PlatformSettings As IPlatformSettings
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PlatformSettings : IPlatformSettings with get
override PlatformSettings : IPlatformSettings with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TopLevel.cs#L571" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Platform_IPlatformSettings">IPlatformSettings</a>

#### Implements
<a href="P_Avalonia_Input_IInputRoot_PlatformSettings">IInputRoot.PlatformSettings</a>  


## Remarks
PlatformSettings can be null only if window wasn't initialized yet.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TopLevel">TopLevel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

