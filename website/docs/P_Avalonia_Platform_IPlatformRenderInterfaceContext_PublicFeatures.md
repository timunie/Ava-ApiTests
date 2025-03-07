# PublicFeatures Property


Exposes features that should be available for consumption while context isn't active (e. g. from the UI thread)



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IReadOnlyDictionary<Type, Object> PublicFeatures \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property PublicFeatures As IReadOnlyDictionary(Of Type, Object)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PublicFeatures : IReadOnlyDictionary<Type, Object> with get
```
</TabItem>
</Tabs>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(<a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterfaceContext">IPlatformRenderInterfaceContext Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
