# Owner Property


Gets the owner of the resource provider.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IResourceHost? Owner { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property Owner As IResourceHost
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Owner : IResourceHost with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/IResourceProvider.cs" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>

## Remarks
If multiple owners are added, returns the first.

## See Also


#### Reference
<a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider Interface</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

