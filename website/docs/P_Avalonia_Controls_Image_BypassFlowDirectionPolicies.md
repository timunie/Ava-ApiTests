# BypassFlowDirectionPolicies Property


Gets a value indicating whether control bypass FlowDirecton policies.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override bool BypassFlowDirectionPolicies \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides ReadOnly Property BypassFlowDirectionPolicies As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract BypassFlowDirectionPolicies : bool with get
override BypassFlowDirectionPolicies : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Image.cs#L71" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>Related to FlowDirection system and returns false as default, so if <a href="P_Avalonia_Visual_FlowDirection">FlowDirection</a> is RTL then control will get a mirror presentation. For controls that want to avoid this behavior, override this property and return true.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Image">Image Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
