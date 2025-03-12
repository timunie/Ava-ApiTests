# LifetimeOverride Property
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>

Gets a method to override a lifetime factory.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("This property has no effect", true)]
public Func<Type, IApplicationLifetime?>? LifetimeOverride { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("This property has no effect", true)>
Public ReadOnly Property LifetimeOverride As Func(Of Type, IApplicationLifetime)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("This property has no effect", true)>]
member LifetimeOverride : Func<Type, IApplicationLifetime> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AppBuilder.cs#L64" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>, <a href="T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime">IApplicationLifetime</a>)

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

