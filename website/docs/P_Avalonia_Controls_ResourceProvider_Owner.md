# Owner Property


Gets the owner of the resource provider.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IResourceHost? Owner \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Owner As IResourceHost
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Owner : IResourceHost with get
override Owner : IResourceHost with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/ResourceProvider.cs#L32" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>

#### Implements
<a href="P_Avalonia_Controls_IResourceProvider_Owner">IResourceProvider.Owner</a>  
If multiple owners are added, returns the first.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceProvider">ResourceProvider Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
